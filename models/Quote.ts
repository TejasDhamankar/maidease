import mongoose, { Document, Model, Schema } from "mongoose";
export interface IQuote extends Document {
  name: string;
  email: string;
  phone: string;
  service: string;
  urgency: string;
}

const QuoteSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
    },
    phone: {
      type: String,
      required: [true, "Please provide a phone number"],
    },
    service: {
      type: String,
      required: [true, "Please provide a service"],
    },
    urgency: {
      type: String,
      required: [true, "Please provide the urgency level"],
    },
  },
);

const Quote: Model<IQuote> = mongoose.models.Quote || mongoose.model<IQuote>("Quote", QuoteSchema);

export default Quote;