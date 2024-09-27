"use client";
import { useEffect, useState } from "react";
import { UserCard } from "./_components/user-card";
import { SearchAllContacts } from "~/app/lib/actions/queries";
import { div } from "framer-motion/client";

export default function ({ searchTerm }: { searchTerm: string }) {
  const [contactsArray, setArray] = useState<
    {
      givenName: string | null;
      ContactPhone: string;
      contactProfile: string | null;
    }[]
  >([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactData = await SearchAllContacts(searchTerm);
        setArray(contactData);
        console.log(contactData);
      } catch (e: any) {
        console.log("Someting up with the DB");
      }
    };
    getContacts();
  }, [searchTerm]);

  if (contactsArray.length === 0) {
    return (
      <div className="flex flex-wrap mt-4 bg-background/30 rounded-xl justify-center p-2">
        No Contacts
      </div>
    );
  }

  return (
    <div className="flex flex-wrap mt-4 bg-accent rounded-xl p-2">
      {contactsArray?.map((u) => (
        <UserCard name={String(u.givenName)} imgUrl={u.contactProfile!}>
          {u.givenName?.split(" ").at(0)}
        </UserCard>
      ))}
    </div>
  );
}
