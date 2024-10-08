export default function BranchSelect({ branches, handleBranchChange }) {
    return (
        <div className="">
            <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-2">Departure Branch</label>
            <select
                name="branch"
                id="branch"
                className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                onChange={handleBranchChange}
            >
                <option value="">Select a branch</option>
                {branches.map((branch) => (
                    <option key={branch.id} value={branch.branch_name}>
                        {branch.branch_name} ({branch.branch_code})
                    </option>
                ))}
            </select>
        </div>
    )
}