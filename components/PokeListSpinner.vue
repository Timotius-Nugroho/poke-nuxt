<!-- Please remove this file from your project -->
<template>
  <div
    class="border-r-2 border-b-[1px] border-[#f5cf36] shadow rounded-[20px] p-4 w-full"
  >
    <div class="animate-pulse flex space-x-4">
      <div class="rounded-[20px] bg-[#202329] h-24 w-24"></div>
      <div class="flex-1 space-y-4 py-1">
        <div class="h-4 bg-[#202329] rounded mt-4"></div>
        <div class="space-y-2">
          <div class="grid grid-cols-3 gap-4">
            <div class="h-2 bg-[#202329] rounded col-span-2"></div>
            <div class="h-2 bg-[#202329] rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-[#202329] rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokeListSpinner',
}
</script>
