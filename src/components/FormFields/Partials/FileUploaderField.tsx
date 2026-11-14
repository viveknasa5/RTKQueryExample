import { FC, useState, useEffect } from "react";
import { useFormikContext, ErrorMessage } from "formik";
import { Inputs } from "./type";
import { useFileUplaoderMutation } from "../../../Apis/attachment.Apis";

interface FormValues {
  [key: string]: any; // Adjust according to the structure of your form values
}

const FileUploaderField: FC<Inputs> = (props) => {
  const { name, className, disabled, placeholder, extensionTypes, isProfile } =
    props;
  const { setFieldValue, values, errors, touched } =
    useFormikContext<FormValues>();

  const [filePreview, setFilePreview] = useState<string | ArrayBuffer | null>(
    null
  );
  const [extensionError, setExtensionError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fileUploader] = useFileUplaoderMutation();

  // Effect to initialize the file preview based on existing value
  useEffect(() => {
    if (name) {
      if (values[name]?.filePath) {
        setFilePreview(values[name].filePath);
      }
    }
  }, [values, name, setFilePreview]);
  // useEffect(() => {
  //   if (values[name]?.filePath) {
  //     setFilePreview(values[name].filePath);
  //   }
  // }, [values[name]?.filePath]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const currentFileExtension = file?.type.split("/")[1] || "";

    if (
      (extensionTypes?.length ?? 0) > 0 &&
      currentFileExtension &&
      !extensionTypes?.includes(currentFileExtension)
    ) {
      setExtensionError(true);
      return;
    }
    if (file) {
      setFieldValue(name, file);
      const reader = new FileReader();
      reader.onloadend = () => setFilePreview(reader.result);
      reader.readAsDataURL(file);

      console.log(file, "file");
      let newForm = new FormData();
      newForm.append("file", file);
      setIsLoading(true);
      setExtensionError(false);
      if (newForm) {
        newForm.forEach((value, key: any) => {
          console.log(`${key}:`, value, "Hello");
        });
      }

      try {
        const resp = await fileUploader(newForm);
        if (resp) {
          setFieldValue(name, resp?.data?.responseData);
        }
        console.log(resp?.data?.responseData, "responseData");
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleRemoveImage = async () => {
    setIsLoading(true);
    try {
      // Implement file removal logic here if needed
      // await removeFile(values[name]?.uniqueName || '');
      setFieldValue(name, "");
      setFilePreview(null);
    } catch (error) {
      console.error("Error removing file:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (filePreview && typeof filePreview === "string") {
        URL.revokeObjectURL(filePreview);
      }
    };
  }, [filePreview]);

  const isError = !!errors[name] && !!touched[name];
  const inputClassName = `${className ? className : "form-control"} ${
    isError ? "control-error" : ""
  }`;

  return (
    <div className="image-uploader">
      <div className={"relative-position image-style"}>
        {isLoading ? (
          <div className="gifLoder">
            <img
              src={"/assets/images/loader.gif"}
              className="loaderGif"
              alt=""
            />
          </div>
        ) : !filePreview ? (
          <>
            <input
              name={name}
              className={inputClassName}
              type="file"
              disabled={disabled}
              placeholder={placeholder}
              onChange={handleInputChange}
            />
            {isProfile && (
              <img
                width={"80px"}
                height={"80px"}
                alt=""
                className="update-profile-icon"
                src="/assets/svg/pencil.svg"
              />
            )}
          </>
        ) : (
          <div className={"filePreviewContainer"}>
            <img
              src={filePreview as string}
              alt="File Preview"
              className={"previewImage "}
            />
          </div>
        )}
        {extensionError && <div className="error-msg">Invalid file type.</div>}
        <span className="error-msg">
          <ErrorMessage name={name} />
        </span>
      </div>
      <div className={"fileContent"}>
        <img src="/assets/images/fileUplod.png" alt="" />
        <span className={"uploadText"}>
          Upload <br /> Front Photo
        </span>
      </div>
      {!isLoading && filePreview && (
        <button className={"removeButton"} onClick={handleRemoveImage}>
          Remove
        </button>
      )}{" "}
    </div>
  );
};

export default FileUploaderField;
