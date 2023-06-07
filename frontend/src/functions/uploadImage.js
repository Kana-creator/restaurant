const uploadImage = (axios, image) => {
  const formData = new FormData();
  formData.append("file", image);

  axios
    .post("http://localhost:1000/uploadImage", formData)
    .then((res) => alert(res.data.message))
    .catch((error) => alert(error));
};

module.exports = uploadImage;
