import React from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";

const ContactList = () => {
  let contactList = useSelector((state) => state.contactList);

  return (
    <div>
      <SearchBox />
      {contactList.map((item) => (
        <ContactItem item={item} />
      ))}
    </div>
  );
};

export default ContactList;
