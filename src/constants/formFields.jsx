const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"   
    }
]

const EmployeeInformationFields = [
    {
        labelText: 'Name',
        id: 'name',
        labelFor: 'name',
        name: 'name',
        type: 'type',
        placeholder: 'Enter Your Name Here',
    },
    {
        labelText : 'EMPLOYEE ID',
        id: 'employee-id',
        labelFor : 'employee-id',
        name: 'employee-id',
        type: 'text',
        placeholder: 'Enter employee id here...'
    },
    {
        labelText: 'Phone',
        id: 'phone',
        labelFor: 'phone',
        name: 'phone',
        type: 'tel',
        placeholder: 'Enter your phone num here...'
    },
    {
        labelText: 'Time',
        id: 'time',
        labelFor: 'time',
        name: 'time',
        type: 'time',
        placeholder: 'Enter departure time here...'
    },
    {
        labelText: 'REMARKS',
        id: 'remarks',
        labelFor: 'remarks',
        name: 'remarks',
        type: 'textarea',
        placeholder: 'Enter remarks here...',
    },
    // {
    //     labelText: 'LOCATION',
    //     id: 'location',
    //     labelFor: 'location',
    //     name: 'location',
    //     type: 'text',
    //     placeholder: 'Click on the map to pick a location...',
    //     isReadOnly: true 
    // }
    {
        labelText: 'Place',
        id: 'place',
        labelFor: 'place',
        name: 'place',
        type: 'text',
        placeholder: 'Enter you want to go here...',
    },
];


export {loginFields,signupFields,EmployeeInformationFields}