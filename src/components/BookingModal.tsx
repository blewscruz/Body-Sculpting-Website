import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            // Prevent scrolling when modal is open
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        ref={modalRef}
                        className="w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl relative flex flex-col overflow-hidden"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex-1 w-full h-full min-h-[600px] overflow-y-auto bg-brand-beige p-2">
                            <iframe
                                src="https://app.acuityscheduling.com/schedule.php?owner=YOUR_ACUITY_OWNER_ID"
                                title="Schedule Appointment"
                                width="100%"
                                height="800"
                                frameBorder="0"
                                className="w-full h-full rounded-2xl"
                            ></iframe>
                            <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
