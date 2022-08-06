import { Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { Button } from "bootstrap";
import "../components/Formitem.css";
import { FaUsers, FaUser } from "react-icons/fa";

export const FormItem = ({ item, onChange, answer }) => {
  const [currentValue, setCurrentValue] = useState(answer || null);

  const handleChange = (value) => {
    setCurrentValue(value);
    onChange(value, item.value);
  };

  const Logo = item.logo;
  // console.log(Logo);

  switch (item.type) {
    case "text":
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="text"
            id={item.label}
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
          />
        </>
      );
      break;
    case "url":
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="urll"
            id={item.label}
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
          />
          <Form.Label htmlFor="basic-url">{item.label}</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon3">www.eden.com/</InputGroup.Text>
            <Form.Control id="basic-url" aria-describedby="basic-addon3" />
          </InputGroup>
        </>
      );
      break;
    case "box":
      return (
        <>
          <div className="mainbtnd">
            <button className="btncontainer">
              <div className="logoclas">
                {Logo == "FaUser" ? (
                  <FaUser className="icn" />
                ) : (
                  <FaUsers className="icn" />
                )}
              </div>
              <h5>{item.label}</h5>
              <p>{item.sublabel}</p>
            </button>
          </div>
        </>
      );
      return <></>;
  }
};
