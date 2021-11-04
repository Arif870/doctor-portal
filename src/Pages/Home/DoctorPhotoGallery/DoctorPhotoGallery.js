import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Container, Typography } from "@mui/material";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "Denny morin",
    author: "@dannymorin",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    title: "Dr. Androw",
    author: "@androw23",
  },
  {
    img: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "Jin maton",
    author: "@maton33",
  },
  {
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Jue Baiden",
    author: "@baiden",
  },
];

export default function DoctorPhotoGallery() {
  return (
    <div>
      <Container>
        <Typography
          variant="p"
          style={{
            color: "var(--primary-color)",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "20px",
            textAlign: "center",
            display: "block",
          }}
        >
          Respected Doctor's
        </Typography>
        <Typography
          variant="h4"
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          Doctor's Photo Gallery
        </Typography>
        <ImageList sx={{ width: "100%", height: 450 }}>
          <ImageListItem key="Subheader" cols={2}></ImageListItem>
          {itemData.map(item => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar title={item.title} subtitle={item.author} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
}
