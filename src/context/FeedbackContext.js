import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Feedback 1",
      rating: 10,
    },
    {
      id: 2,
      text: "Feedback 2",
      rating: 8,
    },
    {
      id: 3,
      text: "Feedback 3",
      rating: 5,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      setFeedback(
        feedback.filter((item) => {
          return id !== item.id;
        })
      );
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  const updateFeedback = (id, newUpdateItem) => {
    console.log(id, newUpdateItem);
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...newUpdateItem } : item
      )
    );

    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
