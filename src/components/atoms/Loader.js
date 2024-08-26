"use client";

function Loader({ color, size }) {
  return (
    <div class="w-full flex items-center justify-center p-4 gap-2">
      <div class={`w-${size} h-${size} ${color} rounded-full loader`}></div>
      <div class={`w-${size} h-${size} ${color} rounded-full loader`}></div>
      <div class={`w-${size} h-${size} ${color} rounded-full loader`}></div>
    </div>
  );
}

export default Loader;
