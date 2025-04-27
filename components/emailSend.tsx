import { AnimatePresence, motion } from "framer-motion";
import { Inbox, LucideMessageSquareShare, User, X } from "lucide-react";
import { useState } from "react";

export default function EmailSend({
  emailModalVisible,
  setEmailModalVisible,
}: {
  emailModalVisible: boolean;
  setEmailModalVisible: (visible: boolean) => void;
}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, message }),
      });

      if (res.ok) {
        setSuccess(true);
        setEmail("");
        setName("");
        setMessage("");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (!emailModalVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed top-0 left-0 z-[100] h-full w-full bg-black bg-opacity-50 flex justify-center items-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className="bg-black border border-[#A1FAFF] rounded-2xl p-8 w-[90%] md:w-full max-w-md shadow-lg relative"
        >
          <button
            onClick={() => {
              setSuccess(false);
              setEmailModalVisible(false);
            }}
            className="absolute top-3 right-3 text-gray-200 hover:text-[#A1FAFF] text-xl"
          >
            <X className="h-6 w-6" />
          </button>

          {success ? (
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-2">Email odeslán!</h1>
              <p className="text-gray-400">
                děkujeme, že jste nás kontaktovali.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-center">
                POŠLETE NÁM E-MAIL
              </h1>

              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-2 mb-1">
                  <User />
                  <label className="text-gray-400">jméno</label>
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-black border border-[#A1FAFF] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#A1FAFF] text-white"
                  required
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 my-2">
                  <Inbox />
                  <label className="text-gray-400">Email</label>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black border border-[#A1FAFF] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#A1FAFF] text-white"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mt-2">
                  <LucideMessageSquareShare />
                  <label className="text-gray-400">zpráva</label>
                </div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="bg-black border border-[#A1FAFF] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#A1FAFF] text-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#A1FAFF] text-black py-3 rounded-lg hover:bg-[#A1FAFF] transition disabled:opacity-50"
              >
                {loading ? "Odesílání..." : "Odeslat e-mail"}
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
