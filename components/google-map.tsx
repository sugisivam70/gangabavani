"use client";

interface GoogleMapProps {
  className?: string;
}

export default function GoogleMap({ className = "" }: GoogleMapProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d219.86956454987046!2d77.49653346967769!3d13.0088763198191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAwJzMxLjkiTiA3N8KwMjknNDguNCJF!5e1!3m2!1sen!2sin!4v1752043775008!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="GBA Location"
      />
    </div>
  );
}
