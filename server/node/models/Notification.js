import mongoose from "mongoose";


const notifacationSchema = new mongoose.Schema({
    content: {
        type: String
    }
}, {
    timestamps: true
}
)
export default mongoose.model("Notifications", notifacationSchema);