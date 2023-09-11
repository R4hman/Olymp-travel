export async function fetchHotelsApi() {
  const res = await fetch("http://localhost:3000/hotels");
  const data = await res.json();
  return data;
}

export const deleteHotelApi = (id) => {
  console.log(id);
  fetch(`http://localhost:3000/hotels/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8", // Indicates the content
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

export const createHotelApi = (newHotel) => {
  fetch(`http://localhost:3000/hotels`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(newHotel),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
