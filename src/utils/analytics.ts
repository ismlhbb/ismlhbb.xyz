enum EventType {
  'link',
  'navigate',
  'recommend',
}

type TrackEvent = (
  event_name: string,
  event_type: keyof typeof EventType,
  event_data?: { [key: string]: any },
  website_id?: string
) => void;

interface EventData {
  [key: string]: any;
  event_type: keyof typeof EventType;
}

interface CustomPayload {
  website?: string;
  event_name: string;
  event_data: EventData;
}

interface Umami {
  track(
    event_name: string,
    event_data?: EventData
  ): Promise<string> | undefined;
  track(custom_payload: CustomPayload): Promise<string> | undefined;
  track(
    callback: (props: {
      hostname: string;
      language: string;
      referrer: string;
      screen: string;
      title: string;
      url: string;
      website: string;
    }) => CustomPayload
  ): Promise<string> | undefined;
}

declare global {
  interface Window {
    umami: Umami;
  }
}

export const trackEvent: TrackEvent = (
  event_name,
  event_type,
  event_data = {},
  website_id
) => {
  if (window.umami && typeof window.umami.track === 'function') {
    const payload: CustomPayload = {
      event_name,
      event_data: { ...event_data, event_type },
    };

    if (website_id) {
      payload.website = website_id;
    }

    window.umami.track(payload);
  }
};
