import React from "react";
import { Stack, Typography } from "@mui/material";
import { categories } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../store/categorySlice";
const Sidebar = () => {
  const category = useSelector((state) => state.category);
  const selectedCategory = category.name;
  const dispatch = useDispatch();
  const setSelectedCategory = (category, child) => {
    dispatch(
      categoryActions.setCategory({
        typeId: category.typeId,
        name: child.name,
        channel: child.channel ?? "",
      })
    );
  };
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <div
          style={{
            borderBottom: "1px solid #3d3d3d",
            padding: "12px",
          }}
          key={category.typeId}
        >
          <Typography
            style={{
              color: "white",
              fontSize: "1em",
            }}
          >
            {category.type}
          </Typography>
          <Stack
            direction="row"
            sx={{
              overflow: "auto",
              height: { sx: "auto", md: "95%" },
              flexDirection: { md: "column" },
              paddingTop : '12px'
            }}
          >
            {category.children.map((child) => (
              <button
                onClick={() => setSelectedCategory(category, child)}
                className="category-btn"
                style={{
                  width: "70%",
                  background: child.name === selectedCategory && "#FC1503",
                  color: "white",
                }}
                key={child.name}
              >
                <span
                  style={{
                    color: child.name === selectedCategory ? "white" : "red",
                    marginRight: "15px",
                  }}
                >
                  {category.icon}
                </span>
                <span
                  style={{
                    opacity: child.name === selectedCategory ? "1" : "0.8",
                  }}
                >
                  {child.name}
                </span>
              </button>
            ))}
          </Stack>
        </div>
      ))}
    </Stack>
  );
};

export default Sidebar;
