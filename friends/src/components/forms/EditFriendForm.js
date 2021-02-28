
export default function EditFriendForm() {
    return (
        <form >
            <h1>Edit friend</h1>
            <label> Username:
                <input
                    type='text'
                    name='username'
                    // value={user.username}
                    // onChange={handleChanges}
                />
            </label>
            <label> Password:
                <input
                    type='text'
                    name='password'
                    // value={user.password}
                    // onChange={handleChanges}
                />
            </label>
            <button>Edit Friend</button>
        </form>
    )
};