import React, { useEffect } from "react";
import { Button, Input } from "@material-ui/core";
import styles from "./WriteForm.module.scss";
import dynamic from "next/dynamic";

interface WriteFormProps {
  title?: string;
}

const WriteForm: React.FC<WriteFormProps> = ({ title }) => {
  const Editor = dynamic(() => import("../Editor/Editor"), { ssr: false });

  return (
    <div>
      <Input
        classes={{ root: styles.titleField }}
        placeholder="Заголовок"
        defaultValue={title}
      />
      <Editor />
    </div>
  );
};

export default WriteForm;
