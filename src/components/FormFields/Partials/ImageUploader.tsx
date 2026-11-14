import React, { FC } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Inputs } from "./type";
import { ErrorMessage } from "formik";

const ImageUploader: FC<Inputs> = (props) => {
  //   const fileTypes = ["CSV"];

  const { name, label, fileTypes, ...rest } = props;
  // const [isFileData, setFileData] = useState<File | null>();
  // const handleCsvUpload = (file: File | null) => {
  //   setFileData(file);
  // };
  return (
    <div className="">
      {label && (
        <label htmlFor="yourUsername" className="form-label fs-14">
          {label}
        </label>
      )}
      <FileUploader
        {...rest}
        className="file-uploader"
        // handleChange={handleCsvUpload}
        name="file"
        types={fileTypes}
      />
      <ErrorMessage name={name} />
    </div>
  );
};

export default ImageUploader;
