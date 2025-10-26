import bookmodel from "../../models/Booking/book.model.js";

export const bookcontroller = async (req, res) => {
    if (req.method === "POST") {
        const { userId, roomtype, checkInDate, checkOutDate, guests  } = req.body;
        try {
            const newBooking = new bookmodel({
                userId,
                roomtype,
                checkInDate,
                checkOutDate,
                guests,
            });
            await newBooking.save();
            res.status(201).json({ message: "Booking created successfully", booking: newBooking });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error", error });
        }
    } else if (req.method === "GET") {
        try {
            const bookings = await bookmodel.find();
            res.status(200).json({ bookings });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error", error });
        }
    } else if (req.method === "DELETE") {
        const { id } = req.params;
        try {
            const booking = await bookmodel.findByIdAndDelete(id);
            if (!booking) {
                return res.status(404).json({ message: "Booking not found" });
            }
            res.status(200).json({ message: "Booking deleted successfully" });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error", error });
        }
    }
}