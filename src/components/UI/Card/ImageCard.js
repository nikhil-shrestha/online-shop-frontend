import React from "react";

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const imageCard = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardText className="text-muted">blue start print with cusion</CardText>
        <CardImg
          top
          src="http://pngimg.com/uploads/pillow/pillow_PNG14224.png"
          alt="Card image cap"
        />
      </CardBody>
    </Card>
  );
};

export default imageCard;
