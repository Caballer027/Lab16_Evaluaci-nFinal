import React from "react";

export const FooterComponent = () => {
    return (
        <div>
            <footer 
                className="footer" 
                style={{
                    position: "fixed",
                    bottom: 0,
                    width: "100%",
                    textAlign: "center",
                    backgroundColor: "#f8f9fa",
                    padding: "10px 0",
                    borderTop: "1px solid #ddd"
                }}
            >
                <span>Derechos Reservados 2024 @Becerra</span>
            </footer>
        </div>
    )
}

export default FooterComponent;
