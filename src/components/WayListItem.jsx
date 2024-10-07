export default function WayListItem({ id, label, onChange, isChecked }) {
    return (
        <div className={`p-4 border rounded-lg ${isChecked ? 'bg-blue-300' : 'bg-white'}`}>
            <input
                type="checkbox"
                id={id}
                onChange={() => onChange(id)}  // onChange will set the selected option
                checked={isChecked}  // will be true for the selected checkbox
                className="mr-2"
            />
            <label htmlFor={id} className="cursor-pointer">{label}</label>
        </div>
    );
}

