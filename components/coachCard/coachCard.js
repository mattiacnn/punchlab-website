import styles from "./coachCard.module.css";

export default function coachCard({ coach, image }) {
  return (
    <div className="px-4 py-7 relative">
      <img
        className={styles.coachWrapper}
        src={image}
      />
      <p className={styles.coachName}>{coach} </p>
    </div>
  )
}