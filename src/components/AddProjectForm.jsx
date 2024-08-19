import React, { useEffect, useState } from "react";
import {
  Select,
  Button,
  Checkbox,
  Group,
  TextInput,
  MultiSelect,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AddProjectForm.module.css";

function AddProjectForm() {
  const navigate = useNavigate();
  const [technologyOptions, setTechnologyOptions] = useState([]);

  const form = useForm({
    initialValues: {
      title: "",
      website: "",
      repos: [],
      technology: "",
      status: "",
      author: "",
      collaborators: "",
    },
    validate: {
      title: (value) => (value ? null : "Title is required"),
      website: (value) => (value ? null : "Website is required"),
      repos: (value) =>
        value.length > 0 ? null : "At least one repo URL is required",
      technology: (value) =>
        value ? null : "Technology information is required",
      status: (value) => (value ? null : "Status is required"),
      author: (value) => (value ? null : "Author type is required"),
    },
  });

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/technologies`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch technologies");
        }
        const data = await response.json();

        // Map the fetched data to match the format expected by the Select component
        const options = data.map((tech) => ({
          value: tech._id,
          label: tech.title,
        }));
        setTechnologyOptions(options);
      } catch (error) {
        console.error("Error fetching technologies:", error);
      }
    };

    fetchTechnologies();
  }, []);

  const handleSubmit = async (values) => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("No authentication token found");
        throw new Error("No authentication token found");
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/projects`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        const error = await response.text();
        console.error("Failed to create project:", error);
        throw new Error("Failed to create project");
      }

      const data = await response.json();
      console.log("Project created:", data);
      navigate("/projects");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      className={styles.container}
      onSubmit={form.onSubmit((values) => handleSubmit(values))}
    >
      <TextInput
        withAsterisk
        label="Project Title"
        placeholder="Enter your project title"
        {...form.getInputProps("title")}
      />
      <TextInput
        withAsterisk
        label="Website"
        placeholder="Enter the project website URL"
        {...form.getInputProps("website")}
      />
      <MultiSelect
        label="Repositories"
        withAsterisk
        placeholder="Enter repository URLs"
        data={form.values.repos}
        creatable
        searchable
        getCreateLabel={(query) => `+ Add ${query}`}
        onCreate={(query) =>
          form.setFieldValue("repos", [...form.values.repos, query])
        }
        {...form.getInputProps("repos")}
      />
      <Select
        label="Technology"
        withAsterisk
        placeholder="Select the main technology"
        data={technologyOptions}
        {...form.getInputProps("technology")}
      />
      <Select
        label="Status"
        withAsterisk
        placeholder="Select the project status"
        data={[
          { value: "finished", label: "Finished" },
          { value: "MVP", label: "MVP" },
          { value: "stuck", label: "Stuck" },
          { value: "inProgress", label: "In Progress" },
          { value: "ideation", label: "Ideation" },
        ]}
        {...form.getInputProps("status")}
      />
      <Select
        label="Author Type"
        withAsterisk
        placeholder="Is this project solo or collaborative?"
        data={[
          { value: "solo", label: "Solo" },
          { value: "collaborative", label: "Collaborative" },
        ]}
        {...form.getInputProps("author")}
      />
      <TextInput
        label="Collaborators"
        placeholder="List any collaborators"
        {...form.getInputProps("collaborators")}
      />
      <Group justify="flex-end" mt="md">
        <Button type="submit" color="#224EFF">
          Submit
        </Button>
      </Group>
    </form>
  );
}

export default AddProjectForm;
