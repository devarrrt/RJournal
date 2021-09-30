import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogContentText,
    Typography,
} from "@material-ui/core";
import { LoginForm, MainForm, RegisterForm } from "./forms";

import styles from "./AuthDialog.module.scss";

interface IAuthDialog {
    open: boolean;
    onClose: () => void;
}

const AuthDialog: React.FC<IAuthDialog> = ({ open, onClose }) => {
    const [formType, setFormType] = useState<"main" | "login" | "register">(
        "main"
    );

    return (
        <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
            <DialogContent>
                <DialogContentText>
                    <div className={styles.content}>
                        <Typography className={styles.title}>Вход в TJ</Typography>
                        {formType === "main" && (
                            <MainForm
                                onOpenLogin={() => setFormType("login")} />
                        )}
                        {formType === "login" && (
                            <LoginForm
                                onOpenRegister={() => setFormType("register")} />
                        )}
                        {formType === "register" && (
                            <RegisterForm
                                onOpenRegister={() => setFormType("register")}
                                onOpenLogin={() => setFormType('login')}
                            />
                        )}
                    </div>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

export default AuthDialog;

//остановилась на придании логики кнопкам, рабоата с формами
