<template>
  <div class="about">
    <h1>United States vs. China</h1>
    <el-row>
      <el-col :span="6">
      </el-col>
      <el-col :span="6">
        <div v-for="etf in US" :key="etf.id">
          <lightweight v-if="isRes" :cdata="etfData(datacollection, etf)" />
        </div>
      </el-col>
      <el-col :span="6">
        <div v-for="etf in China" :key="etf.id">
          <lightweight v-if="isRes" :cdata="etfData(datacollection, etf)" />
        </div>
      </el-col>
      <el-col :span="6">
      </el-col>
    </el-row>


    <back-to-top bottom="50px" right="50px">
      <button type="button" class="btn btn-info btn-to-top">
        <i class="fas fa-chevron-up"></i>
      </button>
    </back-to-top>
  </div>
</template>
<script>
import lightweight from "@/components/lightweight";
import axios from "axios";

export default {
  name: "Tradewar",
  components: {
    lightweight,
  },
  data() {
    return {
      US:['IYW','XLB','XLC','XLE','XLF','XLI','XLP','XLU','XLV','XLY'],
      China:['CHIK','CHIM','CHIC','CHIE','CHIX','CHII','CHIS','CHIU','CHIH','CHIQ'],
      datacollection: {},
      lightweightData: {},
      isRes: false,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    etfData(lightweightData, etf) {
      const data = !lightweightData[etf] ? [] : lightweightData[etf];
      data["name"] = etf;
      return data;
    },
    fillData(res) {
      this.isRes = res.status === 200 ? true : false;
      this.datacollection = res.data.etf;
    },
    async getData() {
      const api =
        process.env.NODE_ENV === "production"
          ? "https://node-etfs-api.herokuapp.com/api/etfs"
          : "http://localhost:8000/api/etfs";
      await axios.get(api).then(this.fillData);
    },
  },
};
</script>
<style>
.Chart {
  max-width: 200px;
  padding: 20px;
  /* box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.4); */
  border-radius: 20px;
  margin: 50px 0;
}
.btn-to-top {
  width: 50px;
  height: 30px;
  font-size: 22px;
  line-height: 22px;
}
</style>
