
const YoutubeEmbed = ({ embedId }) => (
      <iframe
        width="740"
        height="420"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
  );

export {YoutubeEmbed}
