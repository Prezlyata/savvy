const inputFields = [
    {
        id:1,
        label:"Partner PID",
        type: 'number',
        variant:'outlined',
        required:'required',
        size:'small',
        defaultValue:null
    },
    {
        id:2,
        label:"Platform",
        type: 'text',
        variant:'outlined',
        size:'small',
        defaultValue:null
    },
    {
        id:3,
        label:"Partner name",
        type: 'text',
        variant:'outlined',
        required:'required',
        size:'small',
        defaultValue:null
    },
    {
        id:4,
        label:"Login Url",
        type: 'text',
        variant:'outlined',
        required:null,
        size:'small',
        defaultValue:null
    },
    {
        id:5,
        label:"WebSite",
        type: 'text',
        variant:'outlined',
        required:null,
        size:'small',
        defaultValue:null
    },
    {
        id:6,
        label:"FI_ID",
        type: 'text',
        variant:'outlined',
        required: null,
        size:'small',
        defaultValue:null
    },
    {
        id:7,
        label:"Dormancy period",
        type: 'number',
        variant:'outlined',
        required: 'required',
        size:'small',
        defaultValue:120
    }
]

export default inputFields;