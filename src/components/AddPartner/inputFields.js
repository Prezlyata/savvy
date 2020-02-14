export const inputFields = [
    {
        label:"Partner PID",
        type: 'number',
        variant:'outlined',
        required:'required',
        size:'small',
        defaultValue:null,
    },
    {
        label:"Platform",
        type: 'text',
        variant:'outlined',
        size:'small',
        defaultValue:null
    },
    {
        label:"Partner name",
        type: 'text',
        variant:'outlined',
        required:'required',
        size:'small',
        defaultValue:null
    },
    {

        label:"Login Url",
        type: 'text',
        variant:'outlined',
        required:null,
        size:'small',
        defaultValue:null
    },
    {
        label:"WebSite",
        type: 'text',
        variant:'outlined',
        required:null,
        size:'small',
        defaultValue:null
    },
    {
        label:"FI_ID",
        type: 'text',
        variant:'outlined',
        required: null,
        size:'small',
        defaultValue:null
    },
    {
        label:"Dormancy period",
        type: 'number',
        variant:'outlined',
        required: 'required',
        size:'small',
        defaultValue:120
    }
]


export const partnerStatus = [
    {
        label:"Active",
        value:"end",
        color:"primary",
        labelPlacement:"end"
    }
]

export const emailRules = [
    {
        label:"Send Welcome Emails",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    },
    {
        label:"Send Welcome Emails at SSO",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    },
    {
        label:"Send monitoring and score update notification emails",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    },
    {
        label:"Send inactive emails",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    }
]

export const loginRules = [
    {
        label:"Log ‘login’ when widget is displayed in OLB",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    },
    {
        label:"Reset activity on api login",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    },
    {
        label:"Skip Authentication",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    }
]

export const memberProfileRules =[
    {
        label:"Member can edit email in profile",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    }
]
export const products =[
    {
        label:"APPLICATION SSO IFRAME INTEGRATED",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    },
    {
        label:"APPLICATION_SSO",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    },
    {
        label:"WIDGET_SSO",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    }
]
export const ssoRules =[
    {
        label:"Enable Migration from non-SSO to SSO",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    },
    {
        label:"Enable PMID Migration",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    },
    {
        label:"Don't Confirm Identity during navigation from OLB to SM website",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    },
    {
        label:"Don't Confirm Identity during navigation from Widget to SM website",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    },
    {
        label:"Allow multiple accounts from single partner member id",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    },
    {
        label:"Allow widget notifications",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    },
    {
        label:"Enable monitoring of incoming sso traffic",
        value:"end",
        color:"primary",
        labelPlacement:"end" 
    }
]
