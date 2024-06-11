<script setup lang="ts"></script>

<template>
  <main>
    <!-- About Start -->
    <div class="container-fluid py-5">
      <div class="container">
        <div class="row gx-5">
          <div class="col-lg-5 mb-5 mb-lg-0" style="min-height: 500px">
            <div class="position-relative h-100">
              <img
                class="position-absolute w-100 h-100 rounded"
                src="https://botw-compendium.herokuapp.com/api/v3/compendium/entry/stone_talus/image"
                style="object-fit: cover"
              />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="border-start border-5 border-primary ps-5 mb-5">
              <h6 class="text-primary text-uppercase">Category</h6>
              <h1 class="display-5 text-uppercase mb-0">Monster's Name</h1>
            </div>
            <h4 class="text-body mb-4">Description</h4>

            <div class="border-start border-5 border-primary ps-5 mb-5">
              <h6 class="text-primary text-uppercase">DROPS</h6>
              <ul>
                <li>truc1</li>
                <li>truc2</li>
                <li>truc3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->
  </main>
</template>
