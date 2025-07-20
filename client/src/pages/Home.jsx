import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchItems,
  setSearch,
  setCategory,
  setAvailability,
  selectFilteredItems,
} from "../redux/itemsSlice";
import { Card, Row, Col, Input, Select, Button, Spin, Alert } from "antd";
import { useNavigate } from "react-router-dom";

const { Search } = Input;
const { Option } = Select;

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, items, search, category, availability } = useSelector(
    (state) => state.items
  );
  const filteredItems = useSelector(selectFilteredItems);

  // Get unique categories from items
  const categories = [
    ...new Set(["All Categories", ...items.map((item) => item.category)]),
  ];

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Item Catalog</h1>
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Search
            placeholder="Search by name"
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            allowClear
          />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Select
            value={category}
            onChange={(value) => dispatch(setCategory(value))}
            style={{ width: "100%" }}
          >
            {categories.map((cat) => (
              <Option key={cat} value={cat}>
                {cat}
              </Option>
            ))}
          </Select>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Select
            value={availability}
            onChange={(value) => dispatch(setAvailability(value))}
            style={{ width: "100%" }}
          >
            <Option value="All">All</Option>
            <Option value="Available">Available</Option>
            <Option value="Unavailable">Unavailable</Option>
          </Select>
        </Col>
      </Row>
      {loading ? (
        <Spin size="large" />
      ) : error ? (
        <Alert type="error" message={error} />
      ) : (
        <Row gutter={[16, 16]}>
          {filteredItems.length === 0 ? (
            <Col span={24}>
              <Alert type="info" message="No items found." />
            </Col>
          ) : (
            filteredItems.map((item) => (
              <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={item.name}
                      src={item.image}
                      style={{ height: 200, objectFit: "cover" }}
                    />
                  }
                  actions={[
                    <Button
                      type="primary"
                      onClick={() => navigate(`/items/${item.id}`)}
                    >
                      View Details
                    </Button>,
                  ]}
                >
                  <Card.Meta
                    title={item.name}
                    description={
                      <>
                        <div>Category: {item.category}</div>
                        <div>
                          Availability:{" "}
                          {item.available ? "Available" : "Unavailable"}
                        </div>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))
          )}
        </Row>
      )}
    </div>
  );
}

export default Home;
