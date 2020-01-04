import React from "react";

const Utilities = {
    // BAD - potential XSS attack could happened!
    parseHTML : function(dangerousHTMLContent) {
        return <span dangerouslySetInnerHTML={{__html: dangerousHTMLContent}} />;
    }
};

export default Utilities;