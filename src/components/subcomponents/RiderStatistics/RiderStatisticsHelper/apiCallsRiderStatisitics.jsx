const URL =
  import.meta.env.VITE_API_URL ||
  import.meta.env.VITE_API_LOCAL ||
  "http://localhost:8080";

const getAllRiderStatistics = () => {
  // console.log(URL)
  return fetch(`${URL}/userStatisticsController`)
    .then((res) => {
      // console.log(res)
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    });
};
const getSingleRiderStatistic = (id) => {
  return fetch(`${URL}/userStatisticsController/${id}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.error(err));
};
const createRiderStatistic = (data) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  return fetch(`${URL}/userStatisticsController`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const deleteRiderStatistic = (id) => {
  const options = {
    method: "DELETE",
  };
  return fetch(`${URL}/userStatisticsController/${id}`, options).then((res) => res.json());
};

const updateRiderStatistic = () => {};

export {
  getAllRiderStatistics,
  getSingleRiderStatistic,
  createRiderStatistic,
  updateRiderStatistic,
  deleteRiderStatistic,
};
