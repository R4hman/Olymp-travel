import { Button, IconButton, InputBase, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import { FlexBetween, theme } from "../theme";
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import { useState } from "react";
import DropzoneComponent from "./DropzoneComponent";
import { useCreateHotel } from "../features/hotels/useCreateHotel";

export default function FormInput({ setShowInput }) {
  const [image, setImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const { createHotel, isHotelCreating } = useCreateHotel();

  // selectedImages.length > 0 &&
  //   selectedImages.map((image, index) =>
  //     console.log("sel img", `${URL.createObjectURL(image)}`)
  //   );

  const { register, handleSubmit, reset, formState, getValues, control } =
    useForm();
  const { errors } = formState;
  console.log("get Values", getValues());

  function onSubmit(data) {
    const newObj = { ...data, pictureURL: selectedImages };
    createHotel(newObj, {
      onSuccess: (data) => {
        reset();
      },
    });
    setShowInput(false);
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div>
        <TextField
          id="hotelsName"
          label="Ad"
          error={!!errors.hotelsName}
          helperText={errors.hotelsName?.message}
          {...register("hotelsName", {
            required: "xana boş ola bilməz",
          })}
        />
        <TextField
          id="price"
          label="Qiymət"
          error={!!errors.price}
          helperText={errors.price?.message}
          {...register("price", {
            required: "xana boş ola bilməz",
          })}
        />
      </div>
      <div>
        <TextField
          id="date"
          label="Tarix"
          error={!!errors.date}
          helperText={errors.date?.message}
          {...register("date", {
            required: "xana boş ola bilməz",
          })}
        />
        <TextField
          id="position"
          label="Ünvan"
          error={!!errors.position}
          helperText={errors.position?.message}
          {...register("position", {
            required: "xana boş ola bilməz",
          })}
        />
      </div>
      <div>
        <TextField
          label="Təsvir"
          id="overview"
          error={!!errors.overview}
          helperText={errors.overview?.message}
          {...register("overview", {
            required: "xana boş ola bilməz",
          })}
        />
        {/* <TextField
          //   id="standard-error-helper-text"
          id="pictureURL"
          label="Şəkil"
          defaultValue="Şəkil"
          //   {...register("price", {
          //     required: "xana boş ola bilməz",
          //   })}
          //   helperText="Incorrect entry."
          variant="standard"
        /> */}

        <Box border={`1px solid black`} borderRadius="5px" mt="1rem" p="1rem">
          <Controller
            control={control}
            name="pictureURL"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <DropzoneComponent
                selectedImages={selectedImages}
                setSelectedImages={setSelectedImages}
                onChange={onChange} // send value to hook form
                onBlur={onBlur} // notify when input is touched/blur
                selected={value}
              />
            )}
          />
        </Box>
      </div>
      <Button type="submit">Create</Button>
    </form>
  );
}
