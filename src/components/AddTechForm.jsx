import React, { useContext } from "react";
import { Select, Button, TextInput, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DatePicker } from "@mantine/dates";
import { useNavigate } from "react-router-dom";
import styles from "../styles/modules/AddProjectForm.module.css";
import { SessionContext } from "../contexts/SessionContext";

function AddTechForm() {
  const navigate = useNavigate();
  const { fetchedTechnologies } = useContext(SessionContext);

  const form = useForm({
    initialValues: {
      title: "",
      version: "",
      firstContact: null, // Corrected default value
      knowledge: "",
    },
    validate: {
      title: (value) => (value ? null : "Title is required"),
      version: (value) => (value ? null : "Version is required"),
      firstContact: (value) => (value ? null : "FirstContact is required"),
      knowledge: (value) => (value ? null : "Knowledge type is required"),
    },
  });
  const handleSubmit = async (values) => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("No authentication token found");
        throw new Error("No authentication token found");
      }

      if (!fetchedTechnologies.length) {
        console.error("No technology options available");
        throw new Error("No technology options available");
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/admin/technologies`,
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
        console.error("Failed to create technology:", error);
        throw new Error("Failed to create technology"); // Fixed typo
      }

      const data = await response.json();
      console.log("Technology created:", data);
      navigate("/tech");
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
        label="Technology Title"
        placeholder="Enter the Name of the tech skill acquired"
        {...form.getInputProps("title")}
      />
      <TextInput
        withAsterisk
        label="Version"
        placeholder="Enter the Version learned"
        {...form.getInputProps("version")}
      />
      <DatePicker
        withAsterisk
        label="First Contact"
        placeholder="When did you first start learning this tech?"
        {...form.getInputProps("firstContact")}
      />
      <Select
        label="Knowledge Status"
        withAsterisk
        placeholder="How do you feel using this tech?"
        data={[
          { value: "Overwhelmed", label: "Overwhelmed" },
          { value: "Can Work With This", label: "Can Work With This" },
          { value: "I'm (still) lost", label: "I'm (still) lost" },
        ]}
        {...form.getInputProps("knowledge")}
      />
      <Group position="right" mt="md">
        {" "}
        {/* Corrected Group prop */}
        <Button type="submit" color="#224EFF">
          Submit
        </Button>
      </Group>
    </form>
  );
}

export default AddTechForm;
