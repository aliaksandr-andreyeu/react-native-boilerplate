package com.boilerplate

import android.content.Context
import com.facebook.flipper.android.AndroidFlipperClient
import com.facebook.flipper.android.utils.FlipperUtils
import com.facebook.flipper.plugins.inspector.DescriptorMapping
import com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin
import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor
import com.facebook.flipper.plugins.network.NetworkFlipperPlugin
import com.facebook.react.modules.network.NetworkingModule

import com.boilerplate.BuildConfig

import okhttp3.OkHttpClient.Builder

object FlipperUtils {
    fun initializeFlipper(context: Context) {
        if (BuildConfig.DEBUG && FlipperUtils.shouldEnableFlipper(context)) {
            val client = AndroidFlipperClient.getInstance(context)
            client.addPlugin(InspectorFlipperPlugin(context, DescriptorMapping.withDefaults()))

            val networkFlipperPlugin = NetworkFlipperPlugin()
            NetworkingModule.setCustomClientBuilder(
                object : NetworkingModule.CustomClientBuilder {
                    override fun apply(builder: Builder) {
                        builder.addNetworkInterceptor(FlipperOkhttpInterceptor(networkFlipperPlugin))
                    }
                }
            )
            client.addPlugin(networkFlipperPlugin)
            client.start()
        }
    }
}