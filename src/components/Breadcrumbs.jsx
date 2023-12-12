import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, Typography } from "@mui/material";

import { useLocation, Link as RouterLink } from "react-router-dom";

function LinkRouter(props) {
    return <Link {...props} component={RouterLink} />;
}

export const SimpleBreadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    const breadcrumbNameMap = {
        "/game": "Game",
        "/rules": "Rules",
        "/history": "History",
    };
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <LinkRouter underline="hover" color="inherit" to="/">
                Home
            </LinkRouter>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                return last ? (
                    <Typography color="text.primary" key={to}>
                        {breadcrumbNameMap[to]}
                    </Typography>
                ) : (
                    <LinkRouter
                        underline="hover"
                        color="inherit"
                        to={to}
                        key={to}
                    >
                        {breadcrumbNameMap[to]}
                    </LinkRouter>
                );
            })}
        </Breadcrumbs>
    );
};
