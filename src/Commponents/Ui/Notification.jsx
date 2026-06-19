import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Notification = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowModel(!showModel)}
        className="bg-transparent border-none p-0 text-inherit"
      >
        <IoMdNotificationsOutline size={24} />
      </button>

      {showModel && (
        <>
          {/* Overlay للموبايل */}
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setShowModel(false)}
          />

          {/* Notification Modal */}
          <div
            className="
              fixed
              top-16
              right-4
              z-50
              bg-white
              rounded-xl
              shadow-lg
              p-4
              w-[350px]
              max-w-[calc(100vw-2rem)]
              border
            "
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-bold text-gray-800">
                Notifications
              </h5>

              <button
                onClick={() => setShowModel(false)}
                className="
                  bg-red-500
                  text-white
                  px-2
                  py-1
                  rounded-md
                  text-sm
                  hover:bg-red-600
                  transition
                "
              >
                X
              </button>
            </div>

            {/* Notifications List */}
            <div className="space-y-3 max-h-[400px] overflow-y-auto">
              {[1, 2, 3].map((_, idx) => (
                <div
                  key={idx}
                  className="border-b border-gray-200 pb-3"
                >
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <IoMdNotificationsOutline size={16} />
                      <span>10:00 AM</span>
                    </div>

                    <span>20/02/2025</span>
                  </div>

                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    "Courses" is an educational platform that provides
                    online learning content and interactive lessons for
                    students.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;