export async function fetchToursApi(url) {
  console.log("fetch url: " + url);
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export const deleteTourApi = (id) => {
  console.log(id);
  fetch(`http://localhost:3000/tours/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8", // Indicates the content
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

export const createTourApi = (newTour) => {
  fetch(`http://localhost:3000/tours`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(newTour),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
