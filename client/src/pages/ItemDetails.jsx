import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Card, Button, Spin, Alert, Typography, Tag } from "antd";
import { fetchItemDetails } from "../redux/itemsSlice";

const { Title, Text } = Typography;

function ItemDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { itemDetails, itemDetailsLoading, itemDetailsError } = useSelector(
    (state) => state.items
  );
  useEffect(() => {
    if (id) {
      dispatch(fetchItemDetails(id));
    }
  }, [dispatch, id]);

  if (itemDetailsLoading) return <Spin tip="Loading item details..." />;
  if (itemDetailsError)
    return <Alert type="error" message={itemDetailsError} />;
  if (!itemDetails) return null;

  console.log("itemDetails", itemDetails);
  const {
    name,
    image,
    description,
    category,
    owner,
    condition,
    available,
    borrowedBy,
  } = itemDetails;

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <Card
        cover={
          image && (
            <img
              alt={name}
              src={image}
              style={{ objectFit: "cover", height: 300 }}
            />
          )
        }
        actions={[
          available ? (
            <Button type="primary" key="request" disabled>
              Request to Borrow (Mocked)
            </Button>
          ) : (
            <Tag color="red" key="unavailable">
              Unavailable
            </Tag>
          ),
        ]}
      >
        <Title level={2}>{name}</Title>
        <Text strong>Description: </Text>
        <Text>{description}</Text>
        <br />
        <Text strong>Category: </Text>
        <Text>{category}</Text>
        <br />
        <Text strong>Owner: </Text>
        <Text>{owner}</Text>
        <br />
        <Text strong>Condition: </Text>
        <Text>{condition}</Text>
        <br />
        <Text strong>Availability: </Text>
        <Text>
          {available ? (
            <Tag color="green">Available</Tag>
          ) : (
            <Tag color="red">Unavailable</Tag>
          )}
        </Text>
        <br />
        {!available && borrowedBy && (
          <>
            <Text strong>Borrowed By: </Text>
            <Text>{borrowedBy}</Text>
            <br />
          </>
        )}
        <div style={{ marginTop: 24 }}>
          <Link to="/">
            <Button>Return to Catalog</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default ItemDetails;
