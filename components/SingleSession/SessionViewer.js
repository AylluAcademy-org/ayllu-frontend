import React from 'react';

const SessionViewer = ({ name, video }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      <div className="aspect-video">
        <iframe
          className="w-full h-full rounded"
          src={video.replace("watch?v=", "embed/")}
          title={name}
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default SessionViewer;
