import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() =>  setLoading(false), 3000); // 3 sec delay
    }, []);
    return loading ? <p> Loading Heavy Dashboard...</p>
}
export default Dashboard;
