import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { Box, IconButton } from "@mui/material";
import { FlexBetween } from "../theme";
import { DeleteOutlined } from "@mui/icons-material";

export default function DropzoneComponent({
  selectedImages,
  setSelectedImages,
}) {
  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      setSelectedImages((prevState) => [...prevState, file]);
    });
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: "image/png", maxFiles: 10 });

  return (
    <Box
      border={`2px dashed black`}
      p="1rem"
      width="100%"
      sx={{ "&:hover": { cursor: "pointer" } }}
      className=""
    >
      <div className="disabled" {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop file(s) here ...</p>
        ) : (
          <p>Drag and drop file(s) here, or click to select files</p>
        )}
      </div>
      <FlexBetween>
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {selectedImages.length > 0 &&
            selectedImages.map((image, index) => (
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  // display: "flex",
                  // alignItems: "center",
                }}
                key={index}
              >
                <img
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover" }}
                  src={`${URL.createObjectURL(image)}`}
                  alt="hotel photo"
                />
              </Box>
            ))}
        </Box>
        {selectedImages.length > 0 && (
          <IconButton
            onClick={() => setSelectedImages([])}
            sx={{ width: "50px", height: "50px" }}
          >
            <DeleteOutlined />
          </IconButton>
        )}
      </FlexBetween>
    </Box>
  );
}
