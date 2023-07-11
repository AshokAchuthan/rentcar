//import books collection
const books = require('../models/bookSchema')
const cars=require('../models/carSchema')
const users=require('../models/userSchema')

//add to cart
exports.addTobook = async (req, res) => {
    //get cars details from request
    const { userName, email, checkindate, checkoutdate, carid } = req.body
    const username= req.params.username
    const id = req.params.id

    //logic
    try {
        const user = await users.findOne({username:username});
        const car= await cars.findOne({ id: id });

        if (!user) {
            return res.status(404).json('User not found');
        }

        if (!car) {
            return res.status(404).json('car not found');
        }

        const booking = await books.findOne({ username, checkindate, checkoutdate,carid});

        if (booking) {
            return res.status(401).json('car is already booked');
        }

        const notavlbledate = await books.findOne({ carid });

        if (notavlbledate) {
            const overlappingBooking = await books.findOne({
                carid,
                $or: [
                    { checkindate: { $lte: checkoutdate }, checkoutdate: { $gte: checkindate } },
                    { checkindate: { $lte: checkindate }, checkoutdate: { $gte: checkoutdate } }
                ]
            });

            if (overlappingBooking) {
                return res.status(401).json('Sorry, the car is not available for the selected date range');
            }
        }

        const currentDate = new Date();
        const CheckinDate = new Date(checkindate);

        if (CheckinDate <= currentDate) {
            return res.status(401).json('Please select a valid check-in date');
        }

        if (checkoutdate <= checkindate) {
            return res.status(401).json('Check-out date must be after the check-in date');
        }

        const newbooks = new books({
            userName,
            email,
            checkindate,
            checkoutdate,
            name:car.make,
            location:car.location1,
            totalamount:car.price,
            image:car.image,
            carid
        });

        await newbooks.save();
        res.status(200).json('Booking successful');
    }
    catch (error) {
        res.status(500).json(error);
    }


}
exports.getbooking = async (req, res) => {
    const { userName } = req.params;
    try {
        // const User = await users.findOne({ username: username });

        // if (!User) {
        //     return res.status(404).json('User not found');
        // }

        const booking = await books.find({ userName }); 

        if (booking.length == 0) {
            return res.status(404).json('No bookings found for the user');
        }
        
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.cancelbooking = async (req, res) => {
    const { userName, id, checkindate,checkoutdate } = req.params;
  
    try {
      const cancelbooking = await books.deleteOne({ userName, carid: id, checkindate, checkoutdate });
  
      if (cancelbooking.deletedCount != 0) {
        const remainingcars = await books.find({ userName });
        res.status(200).json(remainingcars);
      } else {
        res.status(404).json('Booking not found');
      }
    } catch (error) {
      res.status(401).json(error);
    }
  };
  
  