import React, { useEffect } from "react";
import { Form, Input, Button, Select, Alert, Spin, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/itemsSlice";

const { Option } = Select;
const { Title } = Typography;

// Static categories based on mock data
const CATEGORY_OPTIONS = ["Fitness", "Outdoors", "Games", "Tools", "Kitchen"];

const CONDITION_OPTIONS = [
  "Like New",
  "Excellent",
  "Very Good",
  "Good",
  "Fair",
];

function AddNewItem() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { addItemLoading, addItemSuccess, addItemError } = useSelector(
    (state) => state.items
  );

  // Reset form on success
  useEffect(() => {
    if (addItemSuccess) {
      form.resetFields();
    }
  }, [addItemSuccess, form]);

  const onFinish = (values) => {
    dispatch(addItem(values));
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "40px auto",
        padding: 24,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 8px #f0f1f2",
      }}
    >
      <Title level={2}>Add New Item</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter the item name" }]}
        >
          <Input placeholder="Enter item name" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <Input.TextArea rows={3} placeholder="Enter item description" />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Please select a category" }]}
        >
          <Select placeholder="Select category">
            {CATEGORY_OPTIONS.map((cat) => (
              <Option key={cat} value={cat}>
                {cat}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Condition"
          name="condition"
          rules={[{ required: true, message: "Please select the condition" }]}
        >
          <Select placeholder="Select condition">
            {CONDITION_OPTIONS.map((cond) => (
              <Option key={cond} value={cond}>
                {cond}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Image URL"
          name="image"
          rules={[{ required: true, message: "Please enter an image URL" }]}
        >
          <Input placeholder="https://example.com/image.jpg" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={addItemLoading}
            block
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      {addItemLoading && (
        <Spin style={{ display: "block", margin: "16px auto" }} />
      )}
      {addItemSuccess && (
        <Alert
          message={addItemSuccess}
          type="success"
          showIcon
          style={{ marginTop: 16 }}
        />
      )}
      {addItemError && (
        <Alert
          message={addItemError}
          type="error"
          showIcon
          style={{ marginTop: 16 }}
        />
      )}
    </div>
  );
}

export default AddNewItem;
