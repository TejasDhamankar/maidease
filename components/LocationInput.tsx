"use client";

import { useEffect, useId, useRef } from "react";
import { MapPin } from "lucide-react";
import { locationSuggestions } from "@/lib/inquiry";

declare global {
  interface Window {
    google?: {
      maps?: {
        places?: {
          Autocomplete: new (
            input: HTMLInputElement,
            options?: {
              componentRestrictions?: { country: string };
              fields?: string[];
              types?: string[];
            }
          ) => {
            addListener: (event: string, callback: () => void) => void;
            getPlace: () => { formatted_address?: string; name?: string };
          };
        };
      };
    };
    __bbGooglePlacesLoading?: Promise<void>;
  }
}

type LocationInputProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
};

export default function LocationInput({
  value,
  onChange,
  className,
  placeholder = "Search your location",
}: LocationInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const listId = useId();

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey || !inputRef.current) return;

    const loadPlaces = () => {
      if (window.google?.maps?.places) return Promise.resolve();
      if (window.__bbGooglePlacesLoading) return window.__bbGooglePlacesLoading;

      window.__bbGooglePlacesLoading = new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Google Places failed to load"));
        document.head.appendChild(script);
      });

      return window.__bbGooglePlacesLoading;
    };

    loadPlaces()
      .then(() => {
        if (!inputRef.current || !window.google?.maps?.places) return;
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
          componentRestrictions: { country: "in" },
          fields: ["formatted_address", "name"],
          types: ["geocode"],
        });
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          onChange(place.formatted_address || place.name || inputRef.current?.value || "");
        });
      })
      .catch(() => {
        // The datalist fallback remains available when Google Places is not configured.
      });
  }, [onChange]);

  return (
    <div className="relative">
      <MapPin className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-orange-500" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        list={listId}
        className={className ?? "h-11 w-full rounded-lg border border-slate-200 bg-white pl-11 pr-4 text-sm font-semibold text-[#12345b] outline-none transition placeholder:text-slate-500 focus:border-orange-500 focus:ring-4 focus:ring-orange-100"}
      />
      <datalist id={listId}>
        {locationSuggestions.map((location) => (
          <option key={location} value={location} />
        ))}
      </datalist>
    </div>
  );
}
