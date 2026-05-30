import mongoose, { Document, Model, Schema } from "mongoose";
export interface IQuote extends Document {
  name: string;
  email?: string;
  phone: string;
  location: string;
  service: string;
  urgency: string;
  genderPreference?: string;
  hours?: string;
  message?: string;
}

const QuoteSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "Please provide a phone number"],
    },
    location: {
      type: String,
      required: [true, "Please provide a location"],
    },
    service: {
      type: String,
      required: [true, "Please provide a service"],
    },
    urgency: {
      type: String,
      required: [true, "Please provide the urgency level"],
    },
    genderPreference: {
      type: String,
    },
    hours: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const Quote: Model<IQuote> = mongoose.models.Quote || mongoose.model<IQuote>("Quote", QuoteSchema);

export default Quote;
