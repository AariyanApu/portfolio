import * as yup from "yup";

export const validationSchemaForPost = yup.object().shape({
  title: yup.string().required("Title is required"),
  slug: yup.string().required("Slug is required"),
  desc: yup.string().required("Description is required"),
  imgUrl: yup.string().required("Image URL is required"),
});

export const validationSchemaForProject = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  projectLink: yup.string().required("Project Link is required"),
  codeLink: yup.string().required("Code Link is required"),
  tags: yup.array().of(yup.string()).required("Tags are required"),
  imgUrl: yup.string().required("Image URL is required"),
});
