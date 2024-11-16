import { CSSProperties } from "react";
import { Button } from "@/app/components";

type CardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

export const Card = ({
  title,
  description,
  imageUrl,
  buttonText = "Learn More",
  onButtonClick,
}: CardProps) => {
  const cardStyles: CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "300px",
  };

  const contentStyles: CSSProperties = {
    padding: "16px",
  };

  return (
    <div style={cardStyles}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        />
      )}
      <div style={contentStyles}>
        <h3 style={{ fontSize: "1.25rem", margin: "0 0 0.5rem 0" }}>{title}</h3>
        <p style={{ fontSize: "1rem", color: "#555", margin: "0 0 1rem 0" }}>
          {description}
        </p>
        <Button onClick={onButtonClick} variant="primary" size="md">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
