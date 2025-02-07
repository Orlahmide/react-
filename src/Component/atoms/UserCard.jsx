import styles from "../../styles/UserCard.module.css"

export default function UserCard({userName, userAge, userDesciption}){

    return(
        <div className={styles.userCard}>
            <div className="userInfo">
                <p>Name</p>
                <p>{userName}</p>
            </div>
            <div className="userInfo">
                <p>Age</p>
                <p>{userAge}</p>
            </div>
            <div className="userInfo">
                <p>{userDesciption}</p>
                <p></p>
            </div>

        </div>
    )
}